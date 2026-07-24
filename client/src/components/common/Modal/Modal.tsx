import './Modal.css'

interface ModalProps {
  title: string
  children: React.ReactNode
}

const Modal = ({ title, children }: ModalProps) => (
  <div className="modal-overlay">
    <div className="modal-shell">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  </div>
)

export default Modal
