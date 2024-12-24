const express = require("express");
const supabase = require("./supabase");
const cors = require("cors");
const app = express();



app.use(
  cors({
    origin: "https://student-management-instinctive.vercel.app/", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

app.use(express.json()); 

const PORT = process.env.PORT || 5000;

app.get("/students", async (req, res) => {
    const { data, error } = await supabase.from("Student").select("*");
    if (error) return res.status(500).json({ error: error.message });
    
    res.status(200).json(data);
  });

  
  app.get("/students/:id", async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from("Student").select("*").eq("id", id).single();
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
  });


  app.post("/students", async (req, res) => {
    const { name, cohort, dateJoined, lastLogin, status, courses } = req.body;
  
    const { data, error } = await supabase.from("Student").insert([
      {
        name,
        cohort,
        dateJoined,
        lastLogin,
        status,
        courses: courses || ["CBSE 9 Science", "CBSE 9 Math"], 
      },
    ]);
  
    if (error) {
      console.error("Supabase Error:", error);
      return res.status(500).json({ error: error.message });
    }
  
    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data,
    });
  });
  
  
  app.put("/students/:id", async (req, res) => {
    const { id } = req.params;
    const { name, cohort, lastLogin, status,courses } = req.body;
    const { data, error } = await supabase.from("Student").update({ name, cohort,  lastLogin, status, courses }).eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json({
      success: true,
      message: "Updated Data successfully",
    
    });
  });

  app.delete("/students/:id", async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from("Student").delete().eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: `Student with ID ${id} deleted successfully.` });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
