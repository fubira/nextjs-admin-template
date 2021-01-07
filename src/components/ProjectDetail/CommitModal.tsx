import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-overlays';
import { Button } from '@paljs/ui/Button';

const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const OverlayModal = styled(Modal)`
  position: absolute;
  width: 50%;
  margin-left: -25%;
  margin-top: -12%;
  z-index: 1040;
  top: 50%;
  left: 50%;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

const ControlStyle = styled.div`
  text-align: center;
  margin-top: 2rem;
  button {
    width: 100px;
    margin: 0 1rem;
  }
`;

const ButtonTextStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CommitModalProps {
  className?: string;
  visible?: boolean;
  project: {
    images: [];
    title: string;
    description: string;
    status: {
      supporter: number;
      favorite: number;
      progress: number;
      totalPrice: number;
    };
    expiredAt: number;
  };
  onHide?: () => void;
  onCommit?: () => void;
  onCancel?: () => void;
}

const CommitModal: React.FC<CommitModalProps> = ({ className, visible, project, onHide, onCommit, onCancel }) => {
  return (
    <OverlayModal
      className={className}
      show={visible}
      onHide={onHide}
      onEscapeKeyDown={onHide}
      onBackdropClick={onHide}
      renderBackdrop={() => <Backdrop />}
      aria-labelledby="modal-label"
    >
      <div>
        <h4 id="modal-label"> 支援実行 テストダイアログ </h4>
        <p>{project.title}</p>
        <p>{project.description}</p>
        <ControlStyle>
          <Button status="Primary" size="Medium" onClick={onCommit}>
            <ButtonTextStyle> 支援する </ButtonTextStyle>
          </Button>

          <Button status="Warning" size="Medium" onClick={onCancel}>
            <ButtonTextStyle> キャンセル </ButtonTextStyle>
          </Button>
        </ControlStyle>
      </div>
    </OverlayModal>
  );
};
export default CommitModal;
