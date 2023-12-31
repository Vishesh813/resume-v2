import { Cell, Grid } from "react-mdl"

const points = [
    "Recongized For Spot award",
    "Recognized For Delivery Award",
    "TCS iON Java Hackathon 2019 Finalist",
    "3 times on the Spot Winner in the team",
    "Cleared CODE first round of TCS CODEVITA-2018 "
]

const Awards = () => {
    return (
        <div style={{ height: "100%", width: "100%" }} className="about-me-rightcol">
            <Grid>
                <Cell col={12}>
                    <ul>
                        {points.map((e) => {
                            return (
                                <><li key={e}>{e}</li></>
                            )
                        })}
                    </ul>
                </Cell>
            </Grid>

        </div>
    )
}

export default Awards