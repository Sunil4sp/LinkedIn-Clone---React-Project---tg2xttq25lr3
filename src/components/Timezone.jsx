import React, { useMemo, useState } from "react";
import spacetime from "spacetime";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import "../styles/home.css";

export default function Timezone() {
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.goto(tzValue));
  }, [tz]);

  return (
    <div>
      {/* <h1>Demo</h1>
      <h2>
        <code>react-timezone-select</code> + <code>spacetime</code>
      </h2> */}
      <div className="timezone--wrapper">
        <TimezoneSelect
          value={tz}
          onChange={setTz}
          labelStyle="altName"
          timezones={{
            ...allTimezones,
            /* "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt" */
          }}
        />
      </div>
    </div>
  );
}
