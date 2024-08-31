export const Practice=()=>{
    const student=[];
    console.log(student.length)
    return(
        <>
        {/* 1st */}
        {/* <p>{student.length === 0 && "No students Found"}</p> */}

        {/* 2nd */}
        {/* <p>{!student.length  && "No students Found"}</p> */}

        {/* 3rd */}
        <p>{Boolean(!student.length)  && "No students Found"}</p>
        <p>Numbers of students:{student.length}</p>
        </>
    )
}