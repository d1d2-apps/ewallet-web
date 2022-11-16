import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider() {
  return <ToastContainer autoClose={3000} pauseOnFocusLoss={false} pauseOnHover={false} />;
}
