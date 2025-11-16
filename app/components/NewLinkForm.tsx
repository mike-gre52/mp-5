"use-client";

import createNewLinks from "@/lib/createNewLinks";
import { Textarea } from "@mui/joy";

import {Button, FormHelperText, TextField} from "@mui/material";
import {useState} from "react";
import {LinkProps} from "@/types";

export default function NewLinkForm({
                                        append,
                                    }: {
    append: (post: LinkProps) => void;
}){
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <form className=""
              onSubmit={async (event) => {
                  event.preventDefault();
                  createNewLinks(url,alias)
                      .then((newLink) => append(newLink))
                      .catch((err) => console.log(err));
              }}
        >
            <TextField
                variant="filled"
                sx={{  backgroundColor: "white", width: "100%"}}
                label = "Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <FormHelperText>Whats on your mind?</FormHelperText>
            <div className=" w-full flex justify-end">
                <Button
                    sx = {{ width: "80px"}}
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