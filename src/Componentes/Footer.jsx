
export default function Footer(){

    return(
        
<section className="fixed bottom-0 left-0 right-0  py-4 px-6">
    <div className="px-4 mx-auto sm:px-3 lg:px-6 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start sm:diplay-none xs:display-none">
                <p className="mt-5 text-sm xl:ml-3 xl:mt-0">
                    © 2024 Mario Tores Garcia.
                </p>
            </div>

            <div className="items-center mt-4 xl:mt-0 xl:flex xl:justify-end xl:space-x-6">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 xl:justify-end">
                    <li>
                        <a href="/" title="About" className="text-sm transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            Conoceme
                        </a>
                    </li>
                </ul>
                <ul className="flex items-center justify-center space-x-8 xl:justify-end text-default">
                    <li>
                        <a name = "whatsApp" target="_blank"  href="https://wa.me/525579154175?text=Como%20va%20el%20d%C3%ADa%20">
                        <svg width="1em" height="1em" className="size-8" data-icon="Whatsapp">   <symbol id="ai:local:Whatsapp" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"><path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></g></symbol><use href="#ai:local:Whatsapp"></use>  </svg></a>
                    </li>
                    
                    <li>
                        <a name = "Correo"  target="_blank" href="mailto:to325712@gmail.com">
                        <svg width="1em" height="1em" className="size-8" data-icon="Mail">   <symbol id="ai:local:Mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="m3 7 9 6 9-6"></path></g></symbol><use href="#ai:local:Mail"></use>  </svg>
                        </a>
                    </li>
                    <li>
                        <a name = "Github"  target="_blank" href="https://github.com/MarioNet001">
                        <svg width="1em" height="1em" className="size-8" data-icon="Github">   <symbol id="ai:local:Github" viewBox="0 0 256 256"><path fill="currentColor" d="M127.857 1.407c-69.837 0-126.45 57.512-126.45 128.456 0 59.91 40.37 110.236 94.983 124.444-.036-14.846-.084-33.054-.112-38.728-36.49 8.062-44.19-15.722-44.19-15.722-5.966-15.401-14.564-19.498-14.564-19.498-11.904-8.27.896-8.102.896-8.102 13.17.939 20.108 13.733 20.108 13.733 11.698 20.37 30.685 14.48 38.171 11.077 1.178-8.61 4.575-14.491 8.33-17.818-29.135-3.37-59.764-14.795-59.764-65.853 0-14.547 5.126-26.433 13.516-35.765-1.363-3.358-5.853-16.91 1.27-35.266 0 0 11.015-3.58 36.08 13.66 10.465-2.954 21.685-4.435 32.833-4.485 11.147.05 22.376 1.531 32.86 4.485 25.037-17.24 36.035-13.66 36.035-13.66 7.14 18.355 2.65 31.908 1.287 35.266 8.41 9.332 13.5 21.218 13.5 35.765 0 51.182-30.686 62.447-59.896 65.749 4.704 4.136 8.897 12.243 8.897 24.674 0 9.872-.045 32.6-.087 49.85 53.466-14.989 92.747-64.723 92.747-123.806 0-70.944-56.613-128.456-126.45-128.456"></path></symbol><use href="#ai:local:Github"></use>  </svg></a>
                    </li>
                    <li>
                        <a name="Instagram" target="_blank"  href="https://www.instagram.com/mariotg10?igsh=MWxpcWJ6MTl2eHRyMA==">
                        <svg width="1em" height="1em" className="size-8" data-icon="Instagram">   <symbol id="ai:local:Instagram" viewBox="0 0 24 24"><g fill="currentColor"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path></g></symbol><use href="#ai:local:Instagram"></use>  </svg></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    )
}