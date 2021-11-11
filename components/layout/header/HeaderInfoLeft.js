const HeaderInfoLeft = () => {
  const isClosed = () => {
    const open = new Date("10/Nov/2021 08:00:00").getTime();
    const close = new Date("10/Nov/2025 17:00:00").getTime();
    const now = new Date().getTime();

    if (now > open && now < close) {
      return "OPENED";
    }
    return "CLOSED";
  };

  return (
    <div className="header-info-left">
      <ul>
        <li>
          <i className="far fa-clock" /> Monday-Friday: 8:00 AM - 5:00 PM
          Central Time
        </li>
        <li>Currently: {isClosed()}</li>
      </ul>
    </div>
  );
};

export default HeaderInfoLeft;
