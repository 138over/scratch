package main

import (
    "log"
    "os"
    "net/http"
)

func main() {
    port := ":"+os.Args[1]
    log.Printf("start server on port%s", port)
    http.Handle("/", http.FileServer(http.Dir('.')))
    log.Fatal(http.ListenAndServe(port, nil))
}
