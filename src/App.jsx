import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/users" element={<Users />} />
		<Route path="/about" element={<About />} />
	</Routes>
</BrowserRouter>;
