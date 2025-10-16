import "./Addform.css";
export default function AddForm(){
    return(
        <>
        <section className="container">
            <form>
                <label>ชื่อประชากร</label>
                <input type="text" />
                <select>
                    <option>ชาย</option>
                    <option>หญิง</option>
                </select>
                <button type="submit" className="btn-save">บันทึก</button>
            </form>
        </section>
        </>
    )
}