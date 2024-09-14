import mongoose from "mongoose";

const schema_Account = new mongoose.Schema({
    user_name: {
        type: String,
        default: String(Math.random()) + 'jqk',
        minlength: 3
    },
    avatar: {
        type: String,
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBAgQGB//EADAQAAICAQIEBQIFBQEAAAAAAAABAgMEESEFEjFBEzJRYXEiwRRCUoGxYpGh0fCC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAEWRfXjwc7ZKK/kCU5cnOx8fVTnrL9Md2VWXxK2/WNesIe3V/ucIFlbxiyWqprjBest2ck8zKs818/22/ggAG0pSl5pOXyzVagASRvuh5LZx+JM6KuJ5VfWamv6kcYAuqOL1S0V0XW/VbosK7IWRUq5KUfVM8qSU3WUS5qpuL76AepBXYXE4XaQu0hN9H2ZYgAAAAAAAiyLo49UrJvRL/IGmZlV4tXNPeT8se7PPZF9mRY52PV+3RDIunkWuyxvV9PZehGAAAAAAAAAAAAAACz4dxFwaqyJax6Rk+3yVgA9atwVHCM3pj2vV/kf2LcAAADKDiuT41/JB/RB6fLLXiN/wCHxZyXmf0x+WecAAAAAAABJTTZc9Ko66dX2QEYO+HDJNfXak/RLU2lwz0tf7xArgdF2HdUm2uaK7x3OcAAAAAAym0009Guh6Lh+T+Jx4yfnW0vk84dvCb/AAcpRb+mzZ+z7AegAQApON2811dS6RWr+WVpPnz8TNul/Vp/bYgAAAAAEm5JR6voB04WL+IlrLVVp7+/sW8YxjHlikorokjWmtU1RrXZbv1ZuAAAGSvzsNNO2lbrzR9fc7wB55PUHRnVKnIkl5XujnAAAAZ1a3Wz7GAB6jHs8WiFn6opg4+EXL8Hyyflk19/uAKWcuacperbNRpowAAAAmxFrlVJ/qISTHnyZFcn0TAvjAAAAAAABXcXX1VP5+xXndxaetlcF+VN/wBzhAAAAAH0A6ca91waXrqYIYRclqjAG+RHkyLY+kn/ACRnZxavw82T7TXMjjAAAAGgALnBv8ala7zjs/8AZ0FDVZKqxTrejRa42bVckm+Sf6WB0gAAYsnGuDnN6RSNLr66VrZJL27lVl5csiSSTUF0QEV1jttlN93qaAAAAAAAFnwvH8THcmvzv+ECw4ZX4WFWn1a5n+4A5uN081MbUt63p+z/AORSnqrYRsrlCa1jJaM8zfVKm2Vc+sXoBGAAAW70SbbN665XTVcFrJlvi4sKI7fVPvIDip4dZNKVsuRemmrZ2V4WPWvJzP1k9ToABJJJJaIAAQ2YtFmvNWtX3WxyXcN03pn/AOZf7LEAUE4TrnyTi4y9Gal9dTC+HJYtV2foU+TjTxpJN6xfSQEIAAEmPU774VJeZ7/HcjLjgmPpGV8l12j8dwLRbLRAyABXcWxPGh4sFrOC6eqLEAeSMpNtKKbb20LLieA4N30r6XvKK7e5FwunmnK2XljsvkDtxMdY9aWzm1rJ/YmAAAAAAAAAAGttcbYOE1rFmwAor6pUWyrl1Xf1RGWvE6eenxF5odfgraKbMi1QrTbf+AJcPGllXqK2it5P0R6OEIwgoxWiS0SIsPGhi1cker8z9WTgAAAAAB7nN+GhWn4UdFrq0jpAHH7A6ZVqXUilVKPTcCMGQBgAAAAABmMXJ7IljT3kBF4TsTjps1oyTExa8WvlrW76t9WTJJLYyAAAAAAAAAAAAAAYcU+qNHVD3MACKUUjCAAkjXF9dSRVxXYADZGQAAAAAAAAAP/Z'
    },
    email_user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: String,
    role: {
        type: String,
        enum: ['admin_global', 'admin_local', 'user'],
        default: 'user'
    }
}, { timestamps: true, versionKey: false })

export default mongoose.model('Account', schema_Account)