import Image from "next/image";
import EventCountdown from "./EventCountdown";

const registrationUrl = "https://luma.com/d5gqew38";

const scheduleDays = [
  {
    label: "DAY 01 / SATURDAY",
    dateLabel: "10 OCT",
    date: "2026-10-10",
    events: [
      { time: "09:00", name: "REGISTRATION & BREAKFAST" },
      { time: "10:00", name: "OPENING CEREMONY" },
      { time: "10:15", name: "HACKING STARTS" },
      { time: "12:30", name: "LUNCH" },
      { time: "18:30", name: "DINNER" },
    ],
  },
  {
    label: "DAY 02 / SUNDAY",
    dateLabel: "11 OCT",
    date: "2026-10-11",
    events: [
      { time: "00:00", name: "MIDNIGHT SNACK" },
      { time: "07:00", name: "BREAKFAST" },
      { time: "10:00", name: "HACKING ENDS & SUBMISSIONS" },
      { time: "10:30", name: "JUDGING" },
      { time: "13:00", name: "CLOSING CEREMONY & AWARDS" },
      { time: "18:00", name: "EVENT ENDS" },
    ],
  },
];

function PixelCorners() {
  return (
    <>
      <i className="corner corner-tl" />
      <i className="corner corner-tr" />
      <i className="corner corner-bl" />
      <i className="corner corner-br" />
    </>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>[{number}]</span> {children}
    </p>
  );
}

export default function EventSite() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="The Hackathon, back to top"
        >
          <Image
            src="/images/logo-icon-white.png"
            alt=""
            width={43}
            height={43}
            priority
          />
          <span>
            <strong>BSA</strong>
            <small>THE HACKATHON</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#details">DETAILS</a>
          <a href="#schedule">SCHEDULE</a>
          <a href="#partners">PARTNERS</a>
          <a href="#location">LOCATION</a>
        </nav>
        <a
          className="header-cta"
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
        >
          JOIN THE HACKATHON <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-panel">
            <a href="#about">ABOUT</a>
            <a href="#details">DETAILS</a>
            <a href="#schedule">SCHEDULE</a>
            <a href="#partners">PARTNERS</a>
            <a href="#location">LOCATION</a>
            <a href={registrationUrl} target="_blank" rel="noreferrer">
              JOIN ↗
            </a>
          </div>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-frame pixel-frame">
            <PixelCorners />
            <div className="hero-topline">
              <span>BLOCKCHAIN STUDENT ASSOCIATION</span>
              <span>EPFL / LAUSANNE</span>
            </div>
            <div className="hero-intro">
              <Image
                src="/images/logo-icon-white.png"
                alt=""
                width={49}
                height={49}
              />
              <span>BSA presents</span>
            </div>
            <h1 id="hero-heading" aria-label="THE HACKATHON">
              <svg
                className="poster-title"
                viewBox="300 525 1910 330"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <image
                  href="/images/hackathon-title-reference.png"
                  width="2474"
                  height="1402"
                />
              </svg>
            </h1>
            <EventCountdown />
            <div className="hero-art" aria-hidden="true">
              <Image
                className="hero-character"
                src="/bsa-man-icon-white.svg"
                alt=""
                width={580}
                height={580}
                priority
              />
            </div>

            <div className="hero-bottom">
              <div className="hero-facts">
                <span>10-11 OCTOBER 2026</span>
                <span>FREE FOOD</span>
                <span>BC BUILDING, EPFL</span>
              </div>
              <div className="hero-action">
                <span>REGISTRATION ON LUMA</span>
                <a href={registrationUrl} target="_blank" rel="noreferrer">
                  REQUEST TO JOIN <span aria-hidden="true">↗</span>
                </a>
                <strong>$5,700</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="section-grid">
            <div>
              <SectionLabel number="01">ABOUT THE EVENT</SectionLabel>
              <h2>
                10-11 OCTOBER.
                <br />
                <em>AT EPFL.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                The Blockchain Student Association at EPFL hosts The Hackathon
                in the BC Building, Lausanne, on 10-11 October 2026.
              </p>
              <p>
                Registration is handled through Luma and is subject to
                approval.
              </p>
              <a className="text-link" href="#details">
                EVENT DETAILS <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section id="details" className="content-section details-section">
          <div className="section-heading">
            <SectionLabel number="02">EVENT DETAILS</SectionLabel>
            <h2>
              DATE. PLACE.
              <br />
              PRIZES. FOOD.<span className="cursor">_</span>
            </h2>
          </div>
          <div className="detail-grid">
            <article className="detail-card">
              <span className="detail-index">01 / WHEN</span>
              <strong>10-11</strong>
              <h3>OCTOBER 2026</h3>
              <p>33-hour event, Saturday 9:00 AM to Sunday 6:00 PM, Lausanne time.</p>
              <span className="detail-icon">⌁</span>
            </article>
            <article className="detail-card">
              <span className="detail-index">02 / WHERE</span>
              <strong>EPFL</strong>
              <h3>BC BUILDING</h3>
              <p>On the EPFL campus in Lausanne, Switzerland.</p>
              <span className="detail-icon">⌖</span>
            </article>
            <article className="detail-card">
              <span className="detail-index">03 / THE PRIZE</span>
              <strong>$5,700</strong>
              <h3>IN PRIZES</h3>
              <p>$5,700 total prize pool.</p>
              <span className="detail-icon">✳</span>
            </article>
            <article className="detail-card">
              <span className="detail-index">04 / THE FUEL</span>
              <strong>FREE</strong>
              <h3>FOOD INCLUDED</h3>
              <p>Food is provided during the event.</p>
              <span className="detail-icon">◈</span>
            </article>
          </div>
        </section>

        <section id="schedule" className="content-section schedule-section">
          <SectionLabel number="03">PRELIMINARY SCHEDULE</SectionLabel>
          <h2>
            EVENT
            <br />
            SCHEDULE<span className="cursor">_</span>
          </h2>
          <div className="schedule-grid">
            {scheduleDays.map((day) => (
              <article className="schedule-day" key={day.date}>
                <div className="schedule-day-header">
                  <span>{day.label}</span>
                  <strong>{day.dateLabel}</strong>
                </div>
                <ol className="schedule-entries">
                  {day.events.map((event) => (
                    <li className="schedule-entry" key={`${day.date}-${event.time}-${event.name}`}>
                      <time dateTime={`${day.date}T${event.time}:00+02:00`}>
                        {event.time}
                      </time>
                      <div>
                        <h3>{event.name}</h3>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <p className="schedule-footnote">
            PRELIMINARY PROGRAM / ALL TIMES CEST
          </p>
        </section>

        <section id="partners" className="content-section partners-section">
          <SectionLabel number="04">SPONSORS</SectionLabel>
          <div className="partners-heading">
            <h2>EVENT SPONSORS<span className="cursor">_</span></h2>
          </div>
          <div className="partner-list">
            <a
              href="https://www.belemcapital.com/"
              target="_blank"
              rel="noreferrer"
              className="partner"
            >
              <span className="partner-number">01</span>
              <Image
                className="partner-logo partner-logo-belem"
                src="/sponsors/belem-capital.svg"
                alt="Belem Capital"
                width={368}
                height={100}
              />
              <span className="partner-arrow">↗</span>
            </a>
            <a
              href="https://www.swissquote.com/"
              target="_blank"
              rel="noreferrer"
              className="partner"
            >
              <span className="partner-number">02</span>
              <Image
                className="partner-logo partner-logo-swissquote"
                src="/sponsors/swissquote.png"
                alt="Swissquote"
                width={486}
                height={93}
              />
              <span className="partner-arrow">↗</span>
            </a>
          </div>
        </section>

        <section id="location" className="content-section location-section">
          <div>
            <SectionLabel number="05">VENUE</SectionLabel>
            <h2>
              BC BUILDING,
              <br />
              EPFL<span className="cursor">_</span>
            </h2>
            <p>
              Lausanne, Switzerland
            </p>
            <a
              className="outline-button"
              href="https://www.google.com/maps/search/?api=1&query=46.518569%2C6.561918"
              target="_blank"
              rel="noreferrer"
            >
              GET DIRECTIONS <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="location-map">
            <iframe
              src="https://maps.google.com/maps?q=EPFL+BC+Building,+Ecublens,+Switzerland&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Map of the BC Building at EPFL"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="join" className="join-section">
          <div className="join-frame pixel-frame">
            <PixelCorners />
            <SectionLabel number="06">REGISTRATION</SectionLabel>
            <h2>
              REQUEST
              <br />
              <span>TO JOIN</span>
            </h2>
            <p>
              Submit your registration request through Luma. Attendance is
              subject to approval.
            </p>
            <a
              className="join-button"
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              REQUEST TO JOIN <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a
          className="footer-brand"
          href="https://www.bsaepfl.ch/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/logo-icon-white.png"
            alt=""
            width={39}
            height={39}
          />{" "}
          BSA EPFL
        </a>
        <span>THE HACKATHON © 2026</span>
        <div>
          <a href="https://www.bsaepfl.ch/" target="_blank" rel="noreferrer">
            BSA WEBSITE ↗
          </a>
          <a href="mailto:bsa@epfl.ch">CONTACT ↗</a>
        </div>
      </footer>
    </div>
  );
}
