import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { MuiRail, MuiHandle, MuiTrack, MuiTick } from "./helpers/components"; 

class App extends React.Component {
  constructor(props) {
    super(props);

    const initialValues = [3, 6, 9, 12];

    this.state = {
      domain: [0, 12],
      values: [...initialValues],
      update: [...initialValues]
    };
  }

  onUpdate = update => {
    this.setState({ update });
  };

  onChange = values => {
    this.setState({ values });
  };

  render() {
    const { domain, values, update } = this.state;

    return (
          <div style={{ margin: "10%", height: 120, width: "80%" }}>
            <Slider
              mode={2}
              step={0.5}
              domain={domain}
              rootStyle={{
                position: "relative",
                width: "100%"
              }}
              onUpdate={this.onUpdate}
              onChange={this.onChange}
              values={values}
            >
              <Rail>
                {({ getRailProps }) => <MuiRail getRailProps={getRailProps} />}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map(handle => (
                      <MuiHandle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <MuiTrack
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
              <Ticks count={5}>
                {({ ticks }) => (
                  <div className="slider-ticks">
                    {ticks.map(tick => (
                      <MuiTick key={tick.id} tick={tick} count={ticks.length} />
                    ))}
                  </div>
                )}
              </Ticks>
            </Slider>
          </div>
    );
  }
}

