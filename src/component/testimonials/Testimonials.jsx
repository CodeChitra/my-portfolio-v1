import "./Testimonials.scss";
import React from 'react'

export default function Testimonials() {
  const data = [
    {
      name: "Anushika",
      role: "Collegue @tcs",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://media.licdn.com/dms/image/C4E03AQGDc8Gr8YUwkQ/profile-displayphoto-shrink_800_800/0/1645793494730?e=1677715200&v=beta&t=WivnyxDqZJceU9BQAmyunm0TLaKeSUb8tYDAASCtxDg",
      linkedin: "https://www.linkedin.com/in/anushika-gupta-500964219/",
      featured: false
    },
    {
      name: "Shubham",
      role: "Sr. Collegue @tcs",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://media.licdn.com/dms/image/D5635AQGY0-hD_zYEZQ/profile-framedphoto-shrink_200_200/0/1671459676899?e=1672840800&v=beta&t=yb0qMZmCikeNxMT2TH0kjpeQ03JDJPq3Ug1lLM8UAq0",
      linkedin: "https://www.linkedin.com/in/shubham-chhatwani-89b6291b8/",
      featured: true
    },
    {
      name: "Sunny",
      role: "DG1",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://www.iwmbuzz.com/wp-content/uploads/2020/02/sunny-leones-shocking-biography-revealed.jpg",
      linkedin: "",
      featured: false
    }
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d => <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" alt="" className="left" />
            <img src={d.img} alt="" className="user" />
            <a href={d.linkedin} target="__blank"><img src="assets/linkedin.png" alt="" className="right" /></a>
          </div>
          <div className="center">
            {d.say}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.role}</h4>
          </div>
        </div>)

        }
      </div>
    </div >
  )
}
