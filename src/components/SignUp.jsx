import '../styles/SignUp.css'
function SignUp() {
  return (
    <div className="form-container">
        <form action="">
            <div className="row">
                <div className="col-1">
                    <label>First Name</label>
                </div>
                <div className="col-2">
                    <input type="text" name="firstname" id="name" placeholder="Enter your first name..." />
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <label>Lat Name</label>
                </div>
                <div className="col-2">
                    <input type="text" name="lastname" id="name" placeholder="Enter your last name..." />
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <label>Country</label>
                </div>
                <div className="col-2">
                    <select name="country" id="country">
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Australia">Australia</option>
                        <option value="Italy">Italy</option>
                        <option value="South Africa">South Africa</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <label>Comments</label>
                </div>
                <div className="col-2">
                    <textarea name="comments" id="comments" placeholder="Write something"></textarea>
                </div>
            </div>
            <div className="row submit-row">
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}

export default SignUp