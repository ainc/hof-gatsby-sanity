import React, { useState } from "react"
import { Container, Nav, NavDropdown } from "react-bootstrap"
import InducteeCard from "../InducteeCard/InducteeCard"
import Title from "../Title/Title"
import { motion, AnimatePresence } from "motion/react"
import * as styles from "./inducteenav.module.scss"
import InducteeAnimation from "../InducteeAnimations/InducteeAnimations"

const InducteeNav = (props) => {
  // Filter out duplicates based on name
  const uniqueInductees = props.data.filter(
    (node, index, arr) =>
      index === arr.findIndex((n) => n.inductee.name === node.inductee.name)
  )

  // Dynamically extract unique years and industries
  const years = Array.from(new Set([...uniqueInductees.map((n) => n.inductee.year), "2020"]))
    .filter(Boolean)
    .sort((a, b) => b - a) // newest first

  const industries = Array.from(new Set(uniqueInductees.map((n) => n.inductee.industry)))
    .filter(Boolean)
    .sort()

  const [selectedYear, setSelectedYear] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [fadingOut, setFadingOut] = useState(false)

  // Handle year selection
  const handleYearClick = (year) => {
    setFadingOut(true)
    setTimeout(() => {
      setSelectedYear(year)
      props.setSelectedYear(year)
      setFadingOut(false)
      setSelectedIndustry(null)
      props.setSelectedIndustry(null)
    }, 250)
  }

  // Handle industry selection
  const handleIndustryClick = (industry) => {
    setFadingOut(true)
    setTimeout(() => {
      setSelectedIndustry(industry)
      props.setSelectedIndustry(industry)
      setFadingOut(false)
      setSelectedYear(null)
      props.setSelectedYear(null)
    }, 250)
  }

  // Filter data based on selection
  const filteredInductees =
    selectedYear && selectedYear !== "2020"
      ? uniqueInductees.filter((node) => node.inductee.year === selectedYear)
      : uniqueInductees

  const filteredInducteesByIndustry = selectedIndustry
    ? uniqueInductees.filter((node) => node.inductee.industry === selectedIndustry)
    : uniqueInductees

  // Determine if the selected year is 2020
  const isYear2020 = selectedYear === "2020"

  return (
    <Container className="d-flex flex-column">
      <div
        className={`${styles.navBetween} d-flex align-items-center pb-5`}
        style={{ borderBottom: "1px solid #bbb" }}
      >
        <div>
          <Title className="mx-3" style={{ borderBottom: "none" }}>
            {props.title}
          </Title>
        </div>

        {/* Navigation Filters */}
        <div>
          {/* Large Screens */}
          <Nav as="ul" className={`${styles.navFilter} d-none d-lg-block`}>
            <Nav.Item as="li" onClick={() => handleYearClick(null)} tabIndex="-1">
              All
            </Nav.Item>
            {years.map((year) => (
              <Nav.Item as="li" key={year} onClick={() => handleYearClick(year)} tabIndex="-1">
                {year}
              </Nav.Item>
            ))}
            <br />
            <Nav.Item as="li" onClick={() => handleIndustryClick(null)} tabIndex="-1">
              All
            </Nav.Item>
            {industries.map((industry) => (
              <Nav.Item
                as="li"
                key={industry}
                onClick={() => handleIndustryClick(industry)}
                tabIndex="-1"
              >
                {industry}
              </Nav.Item>
            ))}
          </Nav>

          {/* Small Screens */}
          <Nav as="ul" className="d-lg-none">
            <NavDropdown
              className={styles.titleStyle}
              title={selectedYear || "Select Year"}
              id="collapsable-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleYearClick(null)}>All</NavDropdown.Item>
              {years.map((year) => (
                <NavDropdown.Item key={year} onClick={() => handleYearClick(year)}>
                  {year}
                </NavDropdown.Item>
              ))}
              <br />
              <NavDropdown.Item onClick={() => handleIndustryClick(null)}>All</NavDropdown.Item>
              {industries.map((industry) => (
                <NavDropdown.Item key={industry} onClick={() => handleIndustryClick(industry)}>
                  {industry}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-3 mx-5 d-flex justify-content-center">
        {isYear2020 ? (
          <div className={styles.tbox}>
            Wondering why there is no 2020 class? Unfortunately, the ceremony was canceled in
            2020 and we weren't able to induct any entrepreneurs. But fear not,
            entrepreneurship and innovation didn't come to a halt. Future classes are going to
            be even stronger in Kentucky!
          </div>
        ) : (
          <motion.ul className={`${styles.inducteesList}`}>
            <AnimatePresence mode="wait">
              {selectedIndustry === null
                ? !fadingOut &&
                  filteredInductees.map((node) => (
                    <motion.li
                      key={node.inductee.name}
                      initial={{ scale: 0.75, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.75, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <InducteeAnimation>
                        <InducteeCard
                          img={node.inductee.profilePhoto.asset.gatsbyImageData}
                          name={node.inductee.name}
                          company={node.inductee.company}
                          link={
                            props.title === "Inductees"
                              ? node.slug.current
                              : node.linkedin
                          }
                        />
                      </InducteeAnimation>
                    </motion.li>
                  ))
                : !fadingOut &&
                  filteredInducteesByIndustry.map((node) => (
                    <motion.li
                      key={node.inductee.name}
                      initial={{ scale: 0.75, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.75, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <InducteeAnimation>
                        <InducteeCard
                          img={node.inductee.profilePhoto.asset.gatsbyImageData}
                          name={node.inductee.name}
                          company={node.inductee.company}
                          link={
                            props.title === "Inductees"
                              ? node.slug.current
                              : node.linkedin
                          }
                        />
                      </InducteeAnimation>
                    </motion.li>
                  ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </Container>
  )
}

export default InducteeNav
