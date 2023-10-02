import Employee from "../Models/employees.schema.js";

export const createEmployee=async(req,res)=>{
try{
    const employee=new Employee(req.body)
    await employee.save()
}catch(error){
     res.status(500).json({error:"error in create employee"})
}
}

export const getAllEmployee=async(req,res)=>{
    try{
           const employee=await Employee.find()
           res.status(200).json(employee)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    }

    export const getEmployeeById=async(req,res)=>{
        try{
        const empId=req.params.id
        const employee=await Employee.findById(empId)
        res.status(200).json(employee)
        }catch(error){
            res.status(500).json({error:"error in getempbyid employee"})
        }
        }

        export const updateEmployeeById=async(req,res)=>{
            try{
                 const empId=req.params.id
                 const {firstName,lastName,email,position}=req.body

                 const result=await Employee.updateOne({_id:empId},{firstName,lastName,email,position})

                 if(result.matchedCount===0){
                    return res.status(400).json({error:"Emp id not found"})
                 }

                 const updatedEmp=await Employee.findById(empId)
                 res.status(200).json(updatedEmp)
            }catch(error){
                res.status(500).json({error:"error update employee"})
            }
            }

            export const deleteEmployeeById=async(req,res)=>{
                try{
                   const empId=req.params.id
                   const result=await Employee.deleteOne({_id:empId})

                   if(result.deletedCount ===0){
                    return res.status(404).json({error:"emp id not found"})
                   }
                   res.status(200).json({message:"Empid deleted successfully"})
                }catch(error){
                    res.status(500).json({error:"error delete employee"}) 
                }
                }