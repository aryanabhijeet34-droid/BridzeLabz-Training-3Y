
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm(containerId) {
        const container = document.getElementById(containerId);

        let html = `<form id="dynamicForm">`;

        this.fields.forEach((field, index) => {
            const id = `field${index}`;

            html += `
                <div class="field">
                    <label for="${id}">${field.label}</label>
                    <input
                        type="${field.type}"
                        id="${id}"
                        name="${field.name}"
                        placeholder="Enter ${field.label}"
                        required
                    >
                </div>
            `;
        });

        html += `
            <button type="submit">Submit</button>
            </form>
            <h3>Submitted Data</h3>
            <pre id="formOutput">No data submitted yet.</pre>
        `;

        container.innerHTML = html;

        const form = document.getElementById("dynamicForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("formOutput").textContent =
                JSON.stringify(data, null, 2);

            console.log("Form Data:", data);
        });
    }

    getFormData() {
        const data = {};

        this.fields.forEach((field, index) => {
            const input = document.getElementById(`field${index}`);
            data[field.name] = input.value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" },
    { type: "number", label: "Age", name: "age" }
];

const formBuilder = new FormBuilder(fields);
formBuilder.createForm("formContainer");
