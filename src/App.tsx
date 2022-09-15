import React, {useCallback} from 'react';
import './App.css'

const App = () => {
    const onClick = useCallback(async () => {
        const rawResponse = await fetch('https://127.0.0.1:30673/lol-lobby/v2/lobby', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic cmlvdDpmTkttbWRpLTlEazhRQ3dDemtiS0F3'
            },
            body: JSON.stringify({
                customGameLobby: {
                    lobbyName: "foo",
                    lobbyPassword: null,
                    configuration: {
                        gameMode: "PRACTICETOOL",
                        gameMutator: "",
                        gameServerRegion: "",
                        mapId: 11,
                        mutators: {"id": 1},
                        spectatorPolicy: "AllAllowed",
                        teamSize: 5
                    }
                },
                isCustom: true
            })
        });

        /*
        curl --insecure -X 'POST' \
  'https://127.0.0.1:30673/lol-lobby/v2/lobby' \
  -H 'accept: application/json' \
  -H 'Authorization: Basic cmlvdDpmTkttbWRpLTlEazhRQ3dDemtiS0F3' \
  -H 'Content-Type: application/json' \
  -d '{
      "gameMode": "PRACTICETOOL",
}'
         */

        const content = await rawResponse.json();

        console.log(content);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button style={{width: '500px', height: '200px'}} onClick={onClick}>
                    GO
                </button>
            </header>
        </div>
    );
};

export default App;
