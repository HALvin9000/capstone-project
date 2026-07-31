function Form() {
  return (
    <form>
      <h2>Sign In</h2>
      
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;