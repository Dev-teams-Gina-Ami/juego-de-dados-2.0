# API

Para acceder a la api /api/{players, games o ranking}

Request que acepta la API

POST /players: crea un jugador/a.

PUT /players/{id_player}: modifica el nom del jugador/a.

GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.


POST /games/{id_player}: un jugador/a específic realitza una tirada.

DELETE /games/{id_player}: elimina les tirades del jugador/a.

GET /games/{id_player}: retorna el llistat de jugades per un jugador/a.


GET /ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.

GET /ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.

GET /ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.
