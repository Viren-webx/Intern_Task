export const validateLogin = (email, password) => {
  if (!email || !password) return "All fields required";
  return null;
};

export const validateDPR = (form, images) => {
  if (!form.project || !form.date || !form.weather || !form.description)
    return "All fields required";

  if (form.workers <= 0) return "Worker count must be greater than 0";

  if (images.length === 0) return "Upload at least one image";

  return null;
};