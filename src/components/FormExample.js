import React from "react";
import { useForm } from "react-hook-form";

export default function FormExample() {
  const { register, handleSubmit, watch, errors } = useForm();
  
  
  const onSubmit = data => {
    const lastnameName = watch("lastnameName");
    console.log(`Value of lastnameName: ${lastnameName}`);
    console.log(data);
  }

  return (
    <div className="col pt-3">
      <form onSubmit={handleSubmit(onSubmit)}>

        <h2 className="text-center">Formulario de Registro</h2>
        <hr/>

        <div className="form-group row">
          <label className="col-md-6 col-form-label text-md-right">Apellido y Nombre</label>
          <div class="col-md-4">
            <input 
              type="text" 
              className="form-control" 
              name="lastnameName"
              ref={register({required: true, minLength: 4, maxLength: 30})}
            />
            <small className="form-text text-danger">
                { errors.lastnameName && errors.lastnameName.type === "required" &&
                  "El campo Apellido y Nombre es requerido"
                } 
                { errors.lastnameName && errors.lastnameName.type === "minLength" &&
                  "El campo Apellido y Nombre debe contener como mínmo 4 caracteres"
                }
                {errors.lastnameName && errors.lastnameName.type === "maxLength" &&
                  "El campo Apellido y Nombre debe contener como máximo 30 caracteres"
                } 
            </small> 
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-6 col-form-label text-md-right">DNI</label>
          <div class="col-md-4">
            <input
              type="number"
              className="form-control"
              name="dni"
              ref={register({required: true, minLength: 7, maxLength: 8})}
            />
            <small className="form-text text-danger">
              {errors.dni && errors.dni.type === "required" &&
                "El campo DNI es requerido"
              }
              {errors.dni && errors.dni.type === "minLength" &&
                "El campo DNI debe contener como mínimo 7 números"
              }
              {errors.dni && errors.dni.type === "maxLength" &&
                "El campo DNI debe contener como máximo 8 números"
              }
            </small> 
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-6 col-form-label text-md-right">Email</label>
          <div class="col-md-4">
            <input
              type="text"
              className="form-control"
              name="email"
              ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
            />
            <small className="form-text text-danger">
              {errors.email && errors.email.type === "required" &&
                "El campo Correo es requerido"
              }
              {errors.email && errors.email.type === "pattern" &&
                "El correo debe tener el formato: usuario@correo.com"
              }
            </small> 
          </div>
        
          <hr/>
          <div className="pt-4 mx-auto col-md-4 col-sm-12">
            <input type="submit" className="btn btn-primary btn-block"/>
          </div>
        </div>

      </form>
    </div>
  );
}