import React, { Component } from 'react';
import './CodeOfConduct.scss';

class CodeOfConduct extends Component {
  static displayName = 'CodeOfConduct';

  render() {
    return (
      <div>
        <div className='tab-title'>Code Of Conduct</div>
        <div className='code-of-conduct-text'>
          <p>Kernelcon is commited to providing a harassment-free experience for every person, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, age, race, religion, or editor preference. We do not tolerate any forms of harassment of group participants.</p>
          <p>This code of conduct applies to all Kernelcon mediums, including meetups, events, and online chats. Anyone who violates this code of conduct may be sanctioned or expelled from these mediums at the discretion of the Kernelcon BODs.</p>


          <h4>Harassment includes:</h4>
          <ul>
            <li>Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neuro(a)typicality, physical appearance, body size, age, race, religion, or technical skill level.</li>
            <li>Unwelcome comments regarding a person's lifestyle choices and practices, including those related to food, health, parenting, drugs, and employment.</li>
            <li>Deliberate misgendering or use of 'dead' or rejected names.</li>
            <li>Gratuitous or off-topic sexual images or behaviour in spaces where they're not appropriate.</li>
            <li>Physical contact and simulated physical contact (eg, textual descriptions like "hug" or "backrub") without consent or after a request to stop.</li>
            <li>Threats of violence.</li>
            <li>Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in self-harm.</li>
            <li>Deliberate intimidation.</li>
            <li>Stalking or following.</li>
            <li>Harassing photography or recording, including logging online activity for harassment purposes.</li>
            <li>Sustained disruption of discussion.</li>
            <li>Unwelcome sexual attention.</li>
            <li>Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others offline or online.</li>
            <li>Continued one-on-one communication after requests to cease.</li>
            <li>Deliberate "outing" of any aspect of a person's identity without their consent except as necessary to protect vulnerable people from intentional abuse.</li>
            <li>Publication of non-harassing private communication.</li>
          </ul>
          <h4>Kernelcon encourages participants to act as though they are surrounded by colleagues. This means that in our offline and online meetings, events, and discussions you will be expected to:</h4>

          <ul>
            <li>Minimize use of profanity.</li>
            <li>Restrict conversation of sensitive subjects including, but not limited to, politics and religion, to private communications.</li>
            <li>If you are being harassed by a Kernelcon member, notice that someone else is being harassed, or have any other concerns, please contact the Kernelcon BODs at report@kernelcon.org. If the person who is harassing you is a Kernelcon BOD, they will recuse themselves from handling your incident. We will respond in a prompt and decisive manner.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CodeOfConduct;







