import React from 'react'
import './poster.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header-bg.png'

const Poster = () => {
  return (
    <>
    <Header title="Poster" image={HeaderImage}>
    Please follow each of these steps. If you have questions <b>after</b> watching the videos and reading the instructions, contact Ms. Berbawy at <a href="mailto:sberbawy@fusdk12.net">sberbawy@fusdk12.net</a>. Also note that this is not meant to be used for large jobs such as printing 20 posters.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="about__section-content">
          <h1>Download and Install Adobe Illustrator</h1>
          <p>Make sure to download Adobe Illustrator (available to FUSD teachers and students for only $25)</p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Place Image on Artboard</h1>
          <p>After opening Adobe Illustrator, use the "place" feature located under "file" and place the image you want to print onto the artboard.
          </p>
        </div>

        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="about__section-content">
          <h1>Resize Artboard</h1>
          <p>Resize the artboard to 12in x 12in (This is the size of the paper being put into th</p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Save as Adobe PDF</h1>
          <p>When you are done with placing your image and everything else, you will need to save your design as an Adobe PDF</p>
        </div>

        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="about__section-content">
          <h1>Create a Folder in your Google Drive</h1>
          <p>Upload all of the files you want to print into a Google Drive folder titled "2223_YourLastName_Berbawy" and share it with <a href="mailto:loki@fusdk12.net">loki@berbawy.com</a></p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Make an <a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9JZ19mZHNoczF0fGRlZmF1bHR8MGM1Njc4YmE1ZmExNjgxM2UxODFhNTU3ZDZhNWQzNWQ">Appointment</a></h1>
          <p>Open hours are 3:30-6:30 every Thursday.  If you need to meet at an alternate time, email Ms. Berbawy at <a href="mailto:sberbawy@fusdk12.net">sberbawy@berbawy.com</a></p>
        </div>

        <div className="about__section-image videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DW9tIJsvhok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default Poster