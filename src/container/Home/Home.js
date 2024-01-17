import React, { useState } from 'react'
import Card from '../../components/Card/Card'

import { useEffect } from 'react'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from '../../container';
import { Navbar, SubHeading } from '../../components';
import '../../App.css';

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://cravez-backend.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData();
  }, [])



  return (
    <div className='m-0'>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />

      <div className='app__bg food__padding' >

        <div className='app__specialMenu-title pt-5'>
          <SubHeading title="Check what is available today" />
          <h1 className='headtext__cormorant'>ORDER NOW!</h1>
        </div>


        <div className="flex__center app__search">
          <input className="app__search-input " type="search" placeholder="Search " onChange={(e) => { setSearch(e.target.value) }} value={search} />
        </div>

        {
          foodCat == [] ? <div> ""</div>
            : foodCat.map((data) => {
              return (
                <div className='row' id='main' >
                  <div key={data._id} className='fs-3 m-3' >
                    <SubHeading title={data.CategoryName} />
                  </div>
                  {foodItem == [] ? "No Such Data Found"
                    : foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3' >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]} />
                        </div>
                      )
                    })}
                </div>
              )
            })
        }

      </div>

      <Chef />
      <Intro />

      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}
