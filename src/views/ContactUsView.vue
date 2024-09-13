<template>
    <div class="container">
        <h1 class="head text-center mt-5">Get In Touch with Us!</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="contact-page">
                    <div class="contact-form">
                        <form id="contactForm" action="https://formspree.io/f/movaqpjb" method="POST" @submit.prevent="validateForm">
                            <div class="form-group">
                                <input type="text" v-model="form.firstname" class="form-control" name="Firstname" placeholder="Enter your first name" autocomplete="off" required>
                                <small v-if="errors.firstname" class="text-danger">{{ errors.firstname }}</small>
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="form.lastname" class="form-control" name="lastname" placeholder="Enter your last name" autocomplete="off" required>
                                <small v-if="errors.lastname" class="text-danger">{{ errors.lastname }}</small>
                            </div>
                            <div class="form-group">
                                <input type="email" v-model="form.email" class="form-control" name="Email" placeholder="Enter your Email Address" autocomplete="off" required>
                                <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.message" class="form-control" rows="5" name="message" placeholder="Enter your message" autocomplete="off" required></textarea>
                                <small v-if="errors.message" class="text-danger">{{ errors.message }}</small>
                            </div>
                            <div class="form-group d-flex justify-content-between">
                                <button class="btn btn-secondary" type="reset">Clear</button>
                                <button class="btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div class="contact-info">
                    <h4 class="text-center">Call Us:</h4>
                    <div class="d-flex justify-content-center">
                        <img src="https://keirakistensamy.github.io/capstoneImg/images/phoneicon.png" width="40" height="40"/>
                        <span class="info">063 941 4716</span>
                    </div>
                    <h4 class="text-center">Email Us:</h4>
                    <div class="d-flex justify-content-center">
                        <img src="https://keirakistensamy.github.io/capstoneImg/images/emailicon.png" width="40" height="40"/>
                        <span class="info">PetStation123@gmail.com</span>
                    </div>
                    <h4 class="text-center">Visit Us:</h4>
                    <div class="d-flex justify-content-center">
                        <img src="https://keirakistensamy.github.io/capstoneImg/images/homeicon.png" width="40" height="40"/>
                        <span class="info">135 Main Rd, Claremont, Cape Town, 7708</span>
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/" target="_blank"><img src="https://keirakistensamy.github.io/capstoneImg/images/facebookIcon8.png"></a>
                        <a href="https://github.com/KeiraKistensamy/PetStation.git" target="_blank"><img src="https://keirakistensamy.github.io/capstoneImg/images/githubIcon8.png"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="https://keirakistensamy.github.io/capstoneImg/images/instagramIcon8.png"></a>
                    </div>
                </div>
            </div>
    <div class="row">
        <div class="col-md-6 contact-map d-flex justify-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d18.4628609!3d-33.9804774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42d1bd2aa6f7%3A0xfc3fb30472567911!2s135+Main+Rd%2C+Claremont%2C+Cape+Town%2C+7708!5e0!3m2!1sen!2sza!4v1697696624832!5m2!1sen!2sza" width="80%" height="400" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="col-md-6 container operation-container">
            <div class="operation text-center">
                <h2>Operating Hours</h2>
                <p>Monday: 09h00 - 18h00</p>
                <p>Tuesday: 09h00 - 18h00</p>
                <p>Wednesday: 09h00 - 18h00</p>
                <p>Thursday: 09h00 - 18h00</p>
                <p>Friday: 09h00 - 18h00</p>
                <p>Saturday: 09h00 - 18h00</p>
                <p>Sunday: 09h00 - 18h00</p>
                <p>Public Holidays: 09h00 - 18h00</p>
            </div>
        </div>
    </div>        
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                message: '',
            },
            errors: {}
        };
    },
    methods: {
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        },
        validateForm() {
            this.errors = {};
            let valid = true;

            // Validate First Name
            if (!this.form.firstname) {
                this.errors.firstname = "First name is required.";
                valid = false;
            }

            // Validate Last Name
            if (!this.form.lastname) {
                this.errors.lastname = "Last name is required.";
                valid = false;
            }

            // Validate Email
            if (!this.form.email) {
                this.errors.email = "Email is required.";
                valid = false;
            } else if (!this.validateEmail(this.form.email)) {
                this.errors.email = "Please enter a valid email address.";
                valid = false;
            }

            // Validate Message
            if (!this.form.message) {
                this.errors.message = "Message is required.";
                valid = false;
            } else if (this.form.message.length < 10) {
                this.errors.message = "Message must be at least 10 characters long.";
                valid = false;
            }

            if (valid) {
                // If the form is valid, submit it
                document.getElementById('contactForm').submit();
            }
        }
    }
};
</script>

<style scoped>
.contact-page, .contact-info {
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    font-family: "Irish Grover", system-ui;
    font-weight: 400;
    font-style: normal;
}

.contact-form input, .contact-form textarea {
    border: none;
    border-bottom: 2px solid #000000;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    color: #333;
    background-color: white;
}

.contact-form button {
    background-color: #007BFF;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact-form button:hover {
    background-color: #0056B3;
}

.info {
    font-size: 14px;
}

.head {
    font-family: "Irish Grover", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 36px;
}

.operation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
}

.operation {
    background-color: #FFFFFF;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.social a img {
    transition: transform 0.3s ease;
    cursor: pointer;
}

.social a img:hover {
    transform: scale(1.2);
}

.social a {
    margin: 0 10px;
}

.text-danger {
    color: red;
    font-size: 12px;
}

@media (max-width: 768px) {
    .team-content {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 300px) {
    .social a img {
        display: flex;
        justify-content: center;
    }
}
</style>
