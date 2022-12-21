import "./Testimonials.scss";
import React from 'react'

export default function Testimonials() {
  const data = [
    {
      name: "Sunny",
      role: "DG1",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://www.iwmbuzz.com/wp-content/uploads/2020/02/sunny-leones-shocking-biography-revealed.jpg",
      featured: false
    },
    {
      name: "Nora",
      role: "DG2",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://image.winudf.com/v2/image1/Y29tLnVuaXZzdHVkaW9zYXBwcy5ub3JhZmF0ZWhpd2FsbHBhcGVyc2hkX3NjcmVlbl8wXzE1OTUxMTQ3MjVfMDI2/screen-0.jpg?fakeurl=1&type=.webp",
      featured: true
    },
    {
      name: "Sunny",
      role: "DG1",
      say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eos amet temporibus eaque voluptatem. Quasi?",
      img: "https://www.iwmbuzz.com/wp-content/uploads/2020/02/sunny-leones-shocking-biography-revealed.jpg",
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
            <img src="assets/youtube.png" alt="" className="right" />
          </div>
          <div className="center">
            {d.say}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.role} Of Akash</h4>
          </div>
        </div>)

        }
      </div>
    </div>
  )
}
