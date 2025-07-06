import Squares from '../../../blocks/Backgrounds/Squares/Squares';
import './background.css';

export default function Background({ children }) {
  return (
    <div>
      <Squares density={30} speed={0.15} color="rgba(255,255,255,0.05)" />
      <main>{children}</main>
    </div>
  );
}
