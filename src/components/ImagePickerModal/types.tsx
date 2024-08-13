interface IImagePickerProps {
  visible: boolean;
  closeModal: () => void;
  setProfileImage: React.Dispatch<React.SetStateAction<any>>;
}
