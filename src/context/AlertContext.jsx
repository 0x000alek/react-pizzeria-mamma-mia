import { createContext } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const AlertContext = createContext()

const AlertProvider = ({ children }) => {
  const simpleAlert = (type, title, message) => {
    return withReactContent(Swal).fire({
      title: title,
      text: message,
      icon: type
    })
  }

  const confirmDialogAlert = (type, message) => {
    return withReactContent(Swal).fire({
      title: '¿Estás seguro?',
      text: message,
      icon: type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancelar'
    })
  }

  const toast = (type, message) => {
    return withReactContent(Swal).mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: type,
      title: message
    })
  }

  const stateGlobal = {
    simpleAlert, 
    confirmDialogAlert, 
    toast
  }
  return (
    <AlertContext.Provider value={stateGlobal}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider