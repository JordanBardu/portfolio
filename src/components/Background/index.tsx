import GradientLayer from '../GradientLayer';

function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <GradientLayer />
    </div>
  );
}

export default Background;
