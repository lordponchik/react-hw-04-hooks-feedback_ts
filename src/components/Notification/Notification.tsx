interface Props {
  message: string;
}

export default function Notification({ message }: Props) {
  return <p>{message}</p>;
}
