import OutlineTitle from "../../components/OutlineTitle";

function Skills() {
  return (
    <div className="skills">
      <OutlineTitle title={"Competences"} size={"small"} />
      <p>Here are some of my skills:</p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </div>
  );
}

export default Skills;
