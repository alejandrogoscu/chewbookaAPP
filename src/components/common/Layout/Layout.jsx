import Squares from '../../../blocks/Backgrounds/Squares/Squares';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div>
      <Squares density={30} speed={0.15} color="rgba(255,255,255,0.05)" />
      <main>{children}</main>
    </div>
  );
}
