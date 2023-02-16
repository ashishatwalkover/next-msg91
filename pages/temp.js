<div className="d-flex  align-items-center">
<Dropdown>
  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
    <MdLanguage /> India
  </Dropdown.Toggle>

  <Dropdown.Menu as={CustomMenu}>
    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
    <Dropdown.Item eventKey="3" active>
      Orange
    </Dropdown.Item>
    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>