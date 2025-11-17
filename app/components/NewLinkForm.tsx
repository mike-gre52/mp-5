"use-client";

import createNewLinks from "@/lib/createNewLinks";

import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {LinkProps} from "@/types";

export default function NewLinkForm({
                                        append,
                                    }: {
    append: (post: LinkProps) => void;
}){
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");

    return (
        <form className="p-2"
              onSubmit={async (event) => {
                  setError("")
                  event.preventDefault();
                  createNewLinks(url,alias)
                      .then((newLink) => append(newLink))
                      .catch((err) => setError(err.message));
              }}
        >
            <TextField
                sx={{
                    width: "100%",
                    borderRadius: 10,
                }}
                label = "Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <TextField
                sx={{
                    paddingTop: "5%",
                    paddingBottom: "2%",
                    width: "100%",
                    borderRadius: 10,
                }}

                placeholder="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <Typography variant="body2" component="p" color="error">{error}</Typography>
            <div>
                <Button
                    sx = {{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={url === "" || alias === ""}
                >
                    Create
                </Button>
            </div>


        </form>
    );
}