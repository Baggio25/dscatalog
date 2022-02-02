import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  linkTo: string;
};

const ButtonCreate = ({ linkTo }: Props) => {
  return (
    <Link to={linkTo}>
      <button className="btn btn-primary text-white btn-crud-add">
        Adicionar
      </button>
    </Link>
  );
};

export default ButtonCreate;
