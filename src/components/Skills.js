import Accordion from 'react-bootstrap/Accordion';

function Skills( {colortheme} ){
    const skills = ["JavaScript", "Typescript", "React", "Angular", "Java" , "Python", "Node.js", "Flask", "AWS", "ExpressJS","Spring", "SQL", "MongoDB","Firebase", "Git", "APIs"];

    const skillBoxStyle = { border : "1px solid #007EE5", borderRadius : "5px", padding : "10px", fontWeight : "500", "cursor" : "pointer", backgroundColor : "#007EE5", "color": "white" ,"margin-right" : "20px", "margin-bottom" : "15px"};

    let skillsContainer = [];
    skills.forEach((skill)=>(
        skillsContainer.push(<div style={skillBoxStyle}>{skill}</div>)
    ));


    return (
        <div className="container my-5" id="skills">
            <h1 className="text-center title mb-4">SKILLS</h1>
            <div className="row d-flex flex-wrap justify-content-around">
                <div className="col-4 mw-200 mb-4">
                    <Accordion defaultActiveKey="0" data-bs-theme={colortheme=="dark-theme" ? "dark" : "light"}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Languages </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li> Java </li>
                                    <li> Python </li>
                                    <li> Javascript </li>
                                    <li> SQL </li>
                                    <li> C/C++ </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-4 mw-200 mb-4">
                    <Accordion defaultActiveKey="0"  data-bs-theme={colortheme=="dark-theme" ? "dark" : "light"}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Frameworks </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li> Node.js </li>
                                    <li> Flask </li>
                                    <li> Angular </li>
                                    <li> React </li>
                                    <li> Spring </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-4 mw-200 mb-4">
                    <Accordion defaultActiveKey="0"  data-bs-theme={colortheme=="dark-theme" ? "dark" : "light"}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Tools </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li> DBMS </li>
                                    <li> Git </li>
                                    <li> APIs </li>
                                    <li> Agile </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;