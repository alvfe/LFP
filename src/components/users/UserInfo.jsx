import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { fetchUserInfo } from "../../redux_store";

const updateUser = (id, data) => {
  axios.put(`https://reqres.in/api/users/${id}`, data).then((response) => {
    if (response.status == 200) {
      alert("Se han guardado los cambios correctamente");
    }
  });
};

const deleteUser = (id) => {
  axios.delete(`https://reqres.in/api/users/${id}`).then((response) => {
    if (response.status == 204) {
      alert("Se ha eliminado al usuario");
    }
  });
};

function UserInfo(props) {
  // USER INFO
  // - "id"
  // - "email"
  // - "first_name"
  // - "last_name"
  // - "avatar"
  //
  const { loading, userInfo, error } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState();
  const [editMode, setEditMode] = useState(false);
  const { id: paramId } = props.match.params;

  useEffect(() => {
    dispatch(fetchUserInfo(paramId));
  }, []);

  useEffect(() => {
    setUserProfile(userInfo);
  }, [userInfo]);

  if (loading) {
    return (
      <div className="row">
        <div className="col">
          <p>Cargando datos de usuario, por favor espere...</p>
        </div>
      </div>
    );
  }

  if (userInfo && userProfile) {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      avatar,
    } = userProfile;

    const updateInfo = (field, value) => {
      setUserProfile({
        ...userProfile,
        [field]: value,
      });
    };

    const editBtns = () => {
      const { id, first_name, last_name, email } = userProfile;
      const data = { first_name, last_name, email };

      if (editMode) {
        return (
          <div className="">
            <Button variant="success" onClick={() => updateUser(id, data)}>
              Guardar
            </Button>
            <Button
              className="ml-2"
              onClick={() => {
                setEditMode(false);
                setUserProfile(userInfo);
              }}
              variant="danger"
            >
              Cancelar
            </Button>
          </div>
        );
      }
      return (
        <div>
          <Button variant="primary" onClick={() => setEditMode(true)}>
            Editar
          </Button>
          <Button
            className="ml-2"
            onClick={() => {
              deleteUser(id);
            }}
            variant="danger"
          >
            Eliminar
          </Button>
        </div>
      );
    };

    const inputClass = "col-12 col-sm-6 col-md-4";
    return (
      <div className="row">
        <div className="col-12">
          <img src={avatar} alt="" />
        </div>
        <div className={inputClass}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => {
                updateInfo("first_name", e.target.value);
              }}
              readOnly={!editMode}
            />
          </Form.Group>
        </div>
        <div className={inputClass}>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => {
                updateInfo("last_name", e.target.value);
              }}
              readOnly={!editMode}
            />
          </Form.Group>
        </div>
        <div className={inputClass}>
          <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                updateInfo("email", e.target.value);
              }}
              readOnly={!editMode}
            />
          </Form.Group>
        </div>
        <div className="col-12">{editBtns()}</div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col">
        <p>{`Error al cargar los datos: ${error}`}</p>
      </div>
    </div>
  );
}

export default UserInfo;
