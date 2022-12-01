function AddPatient() {
  return (
    <div className="col-8 border-right border-top">
      <div className="mt-3">
        <h4>Add patient Details</h4>
      </div>
      <form>
        <div className="form-row mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="First name"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Last name"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Patient Number"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="SSN"
            ></input>
          </div>
        </div>
        <div className="form-row mt-3 mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Phone"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Flat Number"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Street"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="City"
            ></input>
          </div>
        </div>
        <div className="form-row mt-3 mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="State"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Zipcode"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Country"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Needs Surgery"
            ></input>
          </div>
        </div>
        <div className="form-row mt-3 mb-3">
          <div className="col">
            <input
              placeholder="dd/mm/yyyy"
              className="form-control form-control-sm"
              type="text"
              onfocus="(this.type='date')"
              id="date"
            ></input>
          </div>
          <div className="col">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Blood Type</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">B+</option>
              <option value="4">B-</option>
              <option value="5">O+</option>
              <option value="6">O-</option>
              <option value="7">AB+</option>
              <option value="8">AB-</option>
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Blood Sugar"
            ></input>
          </div>
        </div>
        <div className="form-row mt-3 mb-3">
          <div className="col">
            <input
              type="number"
              className="form-control form-control-sm"
              placeholder="Cholesterol HDL"
            ></input>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control form-control-sm"
              placeholder="Cholesterol LDL"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Cholesterol Tryglicerides"
            ></input>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-12 text-right">
              <button type="button" className="btn btn-primary mr-2">
                Cancel
              </button>
              <button type="button" className="btn btn-warning">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
