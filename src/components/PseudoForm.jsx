function PseudoForm() {
    const onFormSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log("Formulaire envoyé");
      console.log(formData.get("pseudo"));
    };
  
    return (
      <form onSubmit={onFormSubmit}>
        <input type="text" name="pseudo" />
        <button type="submit">Envoyer</button>
      </form>
    );
  }
  
  export default PseudoForm;