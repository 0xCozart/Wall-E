import { FormField } from "../components";
import { getRandomPrompt } from "../utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const randomPrompt = getRandomPrompt();

  const handleChange = (e) => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Utilize DALL-E to generate a visually stunning image.
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Your name"
            type="text"
            name="name"
            placeholder="..."
            value={form.name}
            handleChange={handleChange}
          />{" "}
          <FormField
            label="Prompt"
            type="text"
            name="prompt"
            placeholder="..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
