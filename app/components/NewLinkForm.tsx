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
                  event.preventDefault();
                  setError("");
                  console.log("clicked submit");
                  //Switch to try catch for next.js error handeling to be passed to front end
                  try {
                      const newLink = await createNewLinks(url, alias);
                      append(newLink);
                      setUrl("");
                      setAlias("");
                  } catch (err) {
                      const error = err as Error;
                      console.log(err);
                      setError(error.message);
                  }
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
                    Add
                </Button>
            </div>


        </form>
    );
}