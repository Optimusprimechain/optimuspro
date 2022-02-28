import PageTitle from "../common/PageTitle";
import userImg from '@/public/images/user4.jpg'
import Image from 'next/image'

export default function CustomerPage({ }) {
  return (
    <section className="customerSection">
      <div className="container">
        <div className="pageContainer text-center">
          <PageTitle title="What our customer say..." />
        </div>
        <div className="cardGrid">
          <div className="circleBox"></div>
          <div className="customerCard">
            <Image src={userImg} alt="CustomerImage" width="90" height="90" />
            <div className="cardHead">
              <h3 className="username">JohnSnow Mark</h3>
              <p className="position">Instagram, CEO</p>
            </div>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.</p>
          </div>
          <div className="customerCard">
            <Image src={userImg} alt="CustomerImage" width="90" height="90" />
            <div className="cardHead">
              <h3 className="username">JohnSnow Mark</h3>
              <p className="position">Instagram, CEO</p>
            </div>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.</p>
          </div>
          <div className="customerCard">
            <Image src={userImg} alt="CustomerImage" width="90" height="90" />
            <div className="cardHead">
              <h3 className="username">JohnSnow Mark</h3>
              <p className="position">Instagram, CEO</p>
            </div>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.</p>
          </div>
          <div className="customerCard">
            <Image src={userImg} alt="CustomerImage" width="90" height="90" />
            <div className="cardHead">
              <h3 className="username">JohnSnow Mark</h3>
              <p className="position">Instagram, CEO</p>
            </div>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, assumenda.</p>
          </div>
        </div>
      </div>
    </section>
  )
}