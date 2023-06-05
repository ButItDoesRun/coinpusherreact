class Player {
    constructor(playername, password, birthdate) {
        // constructor
        this.playername = playername;
        this.password = password;    
        this.birthdate = birthdate;
    }

    RegisterPlayer() {
        const player = this;
        const requestContent = {          
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player),
        };
   
        const result = fetch("https://localhost:5001/casino/player/create", requestContent)
            .then(res => {
                return (res.ok);
            })
            .catch(e => {
                console.log(e);
                return (false);
            });

        return (result);
    };

    async LoginPlayer() {
        const player = {
            playername: this.playername,
            password: this.password,
        }
        const requestContent = {  
            method: "POST",        
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player),
        };

        try {
            const res = await fetch("https://localhost:5001/casino/player/post/login", requestContent);
            const json = await res.json();                    
            return (json);                         
        } catch (e) {
            console.log(e);
            return (null);
        }
    };

}

export {
    Player as default
}