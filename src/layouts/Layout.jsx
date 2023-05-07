import { Dialog } from '../components/dialog/Dialog';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import Modal from '../components/modal/Modal';
import Sidebar from '../components/sidebar/Sidebar';
import CartSidebarView from '../components/sidebar/cart/CartSideBar';
import { useUI } from '../contexts/managed-ui';

const ModalView = ({ modalView, closeModal, displayModal }) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'SUBSCRIBED' && (
        <Dialog
          modalTitle={'Subscribed Successfully'}
          modalContent={'Your email has been subscribed to our company email!'}
          setStateChecked={closeModal}
          stateChecked={displayModal}
        />
      )}
      {modalView === 'ERROR' && (
        <Dialog
          modalTitle={'Sorry something wen wrong'}
          modalContent={'An error happened with your request. Please try again later'}
          setStateChecked={closeModal}
          stateChecked={displayModal}
        />
      )}
    </Modal>
  );
};

const ModalUI = () => {
  const { displayModal, closeModal, modalView } = useUI();
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} displayModal={displayModal} />
  ) : null;
};

const SidebarView = ({ sidebarView, closeSidebar }) => {
  return (
    <Sidebar onClose={closeSidebar}>{sidebarView === 'CART_VIEW' && <CartSidebarView />}</Sidebar>
  );
};

const SidebarUI = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI();
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null;
};

export default function Layout({ children }) {
  const { openModal } = useUI();
  return (
    <main className="fit flex flex-col items-center w-[100%] bg-white-50 relative">
      <Header />
      {children}
      <div className="mt-40 md:mt-28"></div>
      <Footer />
      <ModalUI />
      <SidebarUI />
    </main>
  );
}
