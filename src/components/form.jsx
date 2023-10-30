import React, { useRef } from "react";
import Button from '@mui/material/Button';
import html2canvas from "html2canvas";
import jspdf, { jsPDF } from "jspdf"




function Form() {
    const [input, setInput] = React.useState({
        name: "",
        number: "",
        email: "",
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
        skill6: "",
        education1: "",
        education2: "",
        education3: "",
        education4: "",
        experience1: "",
        experience2: "",
        experience3: "",
        experience4: "",
        experience5: "",
        experience6: "",
        selectedImage: null,
        qualities: ""
    })

    const pdfRef = useRef();


    const [isSubmitted, setIsSubmitted] = React.useState(false);


    function handleChange(event) {
        var { name, value } = event.target;
        if (name === "selectedImage") {
            var myImage = event.target.files[0];
            setInput((prevValue) => {
                return {
                    ...prevValue,
                    [name]: myImage
                }
            })
        } else {
            setInput((preValue) => {
                return {
                    ...preValue,
                    [name]: value,
                }
            })
        }
    }

    function buildResume() {
        setIsSubmitted(true);
    }

    const downloadPDF = () => {
        const inputD = pdfRef.current;
        html2canvas(inputD).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "30px", marginBottom: "100px" }}>
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
            }}>
                <label style={{ gridArea: "1 / 1 / 2 / 2" }}>Name:</label>
                <input type="text" style={{ gridArea: "1/2/2/3" }} name="name" onChange={handleChange} value={input.name} placeholder="Name" />
                <label style={{ gridArea: "2 / 1 / 3 / 2" }}>Phone Number:</label><input type="text" style={{ gridArea: "2/2/3/3" }} name="number" onChange={handleChange} value={input.number} placeholder="Phone Number" />
                <label style={{ gridArea: "3/1/4/2" }}>Email:</label><input type="text" style={{ gridArea: "3/2/4/3" }} name="email" onChange={handleChange} value={input.email} placeholder="Email" />
                <label style={{ gridArea: "4/1/5/2" }}>Skills:</label><input type="text" style={{ gridArea: "4/2/5/3" }} name="skill1" onChange={handleChange} value={input.skill1} placeholder="Skill1 Heading" /><input type="text" style={{ gridArea: "5/2/6/3" }} name="skill2" onChange={handleChange} value={input.skill2} placeholder="Skill2 Heading" /><input type="text" style={{ gridArea: "4/3/5/4" }} name="skill3" onChange={handleChange} value={input.skill3} placeholder="Skill1 Content" /><input type="text" style={{ gridArea: "5/3/6/4" }} name="skill4" onChange={handleChange} value={input.skill4} placeholder="Skill2 Content" /> <input type="text" style={{ gridArea: "6/2/7/3" }} name="skill5" onChange={handleChange} value={input.skill5} placeholder="Skill3 Heading" /><input type="text" style={{ gridArea: "6/3/7/4" }} name="skill6" onChange={handleChange} value={input.skill6} placeholder="Skill3 Content" />
                <label style={{ gridArea: "7/1/8/2" }}>Education:</label><input type="text" style={{ gridArea: "7/2/8/3" }} name="education1" onChange={handleChange} value={input.education1} placeholder="Education1 Heading" /><input type="text" style={{ gridArea: "7/3/8/4" }} name="education2" onChange={handleChange} value={input.education2} placeholder="Education1 Content" /><input type="text" style={{ gridArea: "8/2/9/3" }} name="education3" onChange={handleChange} value={input.education3} placeholder="Education2 Heading" /><input type="text" style={{ gridArea: "8/3/9/4" }} name="education4" onChange={handleChange} value={input.education4} placeholder="Education2 Content" />
                <label style={{ gridArea: "9/1/10/2" }}>Experience:</label><input type="text" style={{ gridArea: "9/2/10/3" }} name="experience1" onChange={handleChange} value={input.experience1} placeholder="Experience1 Heading" /><input type="text" style={{ gridArea: "9/3/10/4" }} name="experience2" onChange={handleChange} value={input.experience2} placeholder=" Experience1 Content " /><input type="text" style={{ gridArea: "10/2/11/3" }} name="experience3" onChange={handleChange} value={input.experience3} placeholder="Experience2 Heading" /><input type="text" style={{ gridArea: "10/3/11/4" }} name="experience4" onChange={handleChange} value={input.experience4} placeholder="Experience2 Content" /> <input type="text" style={{ gridArea: "11/2/12/3" }} name="experience5" onChange={handleChange} value={input.experience5} placeholder="Experience3 Heading" /><input type="text" style={{ gridArea: "11/3/12/4" }} name="experience6" onChange={handleChange} value={input.experience6} placeholder="Experience3 Content" />
                <label style={{ gridArea: "12 / 1 / 13 / 2" }}>Image:</label>
                <input type="file" style={{ gridArea: "12/2/13/3" }} name="selectedImage" onChange={handleChange} />
                <label style={{ gridArea: "13 / 1 / 14 / 2" }}>Qualities:</label>
                <input type="text" style={{ gridArea: "13/2/14/3" }} name="qualities" onChange={handleChange} value={input.qualities} placeholder="Other Qualities" />
                <Button variant="contained" type="submit" onClick={buildResume} style={{ gridArea: "14/2/15/3", marginTop: "40px" }}>Submit</Button>
            </form>
            {isSubmitted === true ? <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div ref={pdfRef} className="readyResume">
                    <div className="resumeHeading">
                        <img alt="image" src={URL.createObjectURL(input.selectedImage)} id="userPhoto" /><span style={{ color: "royalblue", fontSize: "x-large", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bolder" }}>{input.name} </span><span>{input.email} | (+91){input.number}</span>
                    </div>
                    <div className="resumeSkills" ><span style={{ fontSize: "x-large", color: "royalblue", fontWeight: "bold", marginTop: "80px", marginBottom: "20px" }}>Skills:</span>
                        <span style={{ color: "black", fontSize: "large", fontWeight: "bold", marginBottom: "10px" }}>1. {input.skill1}</span><span style={{ fontSize: "medium", color: "black", marginBottom: "30px" }}>{input.skill3}</span><span className="skillsHeading">2. {input.skill2}</span><span className="skillsContent">{input.skill4}</span><span className="skillsHeading">3. {input.skill5}</span><span className="skillsContent">{input.skill6}</span>
                    </div>
                    <div className="resumeSkills"><span className="resumeBulletin">Education:</span><span className="skillsHeading">1. {input.education1}</span>
                        <span className="skillsContent">{input.education2}</span>
                        <span className="skillsHeading">2. {input.education3}</span>
                        <span className="skillsContent">{input.education4}</span>
                    </div>
                    <div className="resumeSkills"><span className="resumeBulletin">Experience:</span>
                        <span className="skillsHeading">1. {input.experience1}</span><span className="skillsContent">{input.experience2}</span>
                        <span className="skillsHeading">2. {input.experience3}</span><span className="skillsContent">{input.experience4}</span>
                        <span className="skillsHeading">3. {input.experience5}</span>
                        <span className="skillsContent">{input.experience6}</span></div>
                    <div className="resumeSkills"><span className="resumeBulletin">Qualities:</span>
                        <span className="skillsContent">{input.qualities}</span>
                    </div>
                </div>
                <Button variant="contained" onClick={downloadPDF}>Download</Button></div> : null
            }
        </div >
    )
}

export default Form;
