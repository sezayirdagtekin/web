<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email" v-model="userData.email"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <!--use v-model as lazy after click any where-->
                        <input
                                type="password"
                                id="password" v-model.lazy="userData.password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age" v-model="userData.age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control" v-model="message" ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail" v-model="mailOption"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail" v-model="mailOption"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male" v-model="gender"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female" v-model="gender"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority" v-model="selectedPriority"
                            class="form-control">
                        <option v-for="priority in priorities" :key="priority">
                           <!-- alternative way to se t default selectedv value is>>> :selected="priority=='Medium'" -->
                             {{priority}}
                        </option>
                    </select>
                </div>
            </div>
            <hr>
             <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                   <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail:{{userData.email}}</p>
                        <p>Password:{{userData.password}}</p>
                        <p>Age:{{userData.age}}</p>
                        <p style="white-space:pre">Message: {{message}}</p> <!-- display style="white-space:pre"> multi line string-->
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for=" item  in mailOption" :key="item"> {{item}} </li>
                        </ul>
                        <p>Gender:{{gender}}</p>
                        <p>Priority:{{selectedPriority}}</p>
                        <p>Switched:{{dataSwitch}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Switch  from "./Switch.vue";

    export default {
        data() {
            return {
                userData:{
                     email:'',
                     password:'',
                     age:27
               } ,
                 message:'A new text' ,
                 mailOption:[] ,
                 gender:'Male',
                 priorities:['Low','Medium','High'] ,
                 selectedPriority:'High',
                 dataSwitch:true
            }
           
        },
        components: {
               appSwitch:Switch
           },
    }
</script>

<style>

</style>
